from flask.views import MethodView
from flask_smorest import Blueprint

from api.models.books import Book
from api.schemas.books import BookSchema

books_bp = Blueprint("books", __name__, url_prefix="/api/books")


@books_bp.route("/list")
class BooksList(MethodView):
    @books_bp.response(200, BookSchema(many=True))
    def get(self):
        from api.database import db

        books = db.session.query(Book).all()
        return books, 200


@books_bp.route("/add")
class BooksAdd(MethodView):
    @books_bp.arguments(BookSchema)
    @books_bp.response(201, BookSchema)
    def post(self, book_data):
        from api.services.book_service import add_book

        book = add_book(book_data)
        return book
