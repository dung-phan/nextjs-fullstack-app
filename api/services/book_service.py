from api.database import db
from api.models.books import Book


def add_book(data):
    book = Book(
        title=data.title,
        author=data.author,
        genre=data.genre,
        description=data.description,
        publisher=data.publisher,
        published_date=data.published_date,
        cover=data.cover,
        ISBN=data.ISBN,
    )

    with db.session() as session:
        session.add(book)
        session.commit()
        session.refresh(book)

    return book
