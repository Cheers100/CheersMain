from pymodm import MongoModel, fields
from datetime import datetime

class User(MongoModel):
    __name = fields.CharField()
    __email = fields.EmailField()
    __password = fields.CharField()
    __dataNasc = fields.DateTimeField()

    class Meta:
        collection_name = "users"
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value

    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        self._email = value

    @property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, value):
        self._password = value

    @property
    def dataNasc(self):
        return self._dataNasc
    
    @dataNasc.setter
    def dataNasc(self, value):
        self._dataNasc = value

    
