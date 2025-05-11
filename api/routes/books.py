from flask import jsonify
from flask.views import MethodView
from flask_smorest import Blueprint

from api.database import db
from api.models.books import Book
from api.schemas.book_recommender import BookRecommenderSchema
from api.schemas.books import BookSchema
from api.services.book_service import add_book, get_book_recommendations

books_bp = Blueprint("books", __name__, url_prefix="/api/books")


@books_bp.route("/list")
class BooksList(MethodView):
    @books_bp.response(200, BookSchema(many=True))
    def get(self):
        books = db.session.query(Book).all()
        return books, 200


@books_bp.route("/add")
class BooksAdd(MethodView):
    @books_bp.arguments(BookSchema)
    @books_bp.response(201, BookSchema)
    def post(self, book_data):

        existing_book = db.session.query(Book).filter_by(ISBN=book_data.ISBN).first()

        if existing_book:
            return jsonify({"message": "A book with this ISBN already exists."}), 400
        else:
            book = add_book(book_data)
            return book, 201


@books_bp.route("/<string:book_id>/recommendations")
class BooksRecommendations(MethodView):
    @books_bp.response(200, BookRecommenderSchema(many=True))
    def get(self, book_id):
        recommendations = get_book_recommendations(book_id)
        schema = BookRecommenderSchema(many=True)

        return schema.dump(recommendations), 200


@books_bp.route("/genre/<string:genre>")
class BooksGenre(MethodView):
    @books_bp.response(200, BookSchema(many=True))
    def get(self, genre):
        books = db.session.query(Book).filter_by(genre=genre).all()

        return books, 200
