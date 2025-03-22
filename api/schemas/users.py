from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from api.models.users import User, UserRole


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude = ("password_hash",)

    role = fields.Enum(UserRole,
                       by_value=True)  # overrides the auto-generated field, ensures enum is serialized as value
    password = fields.String(load_only=True, required=True)
