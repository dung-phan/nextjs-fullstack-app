from api.database import db
from api.models.users import User, UserRole


def create_user(data):
    user = User(
        username=data['username'],
        full_name=data['full_name'],
        email=data['email'],
        university_id=data['university_id'],
        role=UserRole.USER,
    )

    user.set_password(data['password'])

    # this is a context manager that needs clean up,
    # same as with open('file.csv') as file:
    with db.session() as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user


def get_user_by_username(username):
    with db.session() as session:
        user = session.query(User).filter_by(username=username).first()
        return user


def validate_user(username, password):
    user = get_user_by_username(username)
    if user and user.check_password(password):
        return {
            'id': user.id,
            'name': user.full_name,
            'email': user.email,
        }
    return None
