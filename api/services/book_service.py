from api.database import db
from api.models.books import Book


def add_book(data):
    book = Book(
        title=data.title,
        author=data.author,
        genre=data.genre,
        rating=data.rating,
        total_copies=data.total_copies,
        available_copies=data.available_copies,
        description=data.description,
        summary=data.summary,
        is_loaned=False,
    )

    with db.session() as session:
        session.add(book)
        session.commit()
        session.refresh(book)

    return book
