from api.database import db
from api.models.users import User, UserRole


def create_user(data: dict) -> User:
    user = User(
        username=data["username"],
        full_name=data["full_name"],
        email=data["email"],
        university_id=data["university_id"],
        role=UserRole.USER,
    )

    user.set_password(data["password"])

    # this is a context manager that needs clean up,
    # same as with open('file.csv') as file:
    with db.session() as session:
        session.add(user)
        session.commit()
        session.refresh(user)

    return user
