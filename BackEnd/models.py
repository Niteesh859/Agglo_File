from config import db
 

class LifestyleSurvey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender= db.Column(db.String(10),nullable=False)
    time_sports = db.Column(db.Integer, nullable=False)
    time_reading = db.Column(db.Integer, nullable=False)
    time_video_games = db.Column(db.Integer, nullable=False)
    time_studying = db.Column(db.Integer, nullable=False)
    time_tv = db.Column(db.Integer, nullable=False)
    mom = db.Column(db.Integer,nullable=True)
    dad= db.Column(db.Integer,nullable=True)
    
 
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "time_sports": self.time_sports,
            "time_reading": self.time_reading,
            "time_video_games": self.time_video_games,
            "time_studying": self.time_studying,
            "time_tv": self.time_tv,
            "mom":self.mom,
            "dad":self.dad
        }
        
class Tests(db.Model):
    id=db.Column(db.Integer,nullable=False)
    snell=db.Column(db.Integer,nullable=False)
    asti=db.Column(db.Integer,nullable=False)
    blur=db.Column(db.Integer,nullable=False)
    
    def to_json(self):
        return{
            "id":self.id,
            "snell":self.snell,
            "asti":self.asti,
            "blur":self.blur
        }
        
class Ress(db.Model):
    id=db.Column(db.Integer,nullable=False)
    result=db.Column(db.Float,nullable=False)
    def to_json(self):
       return {
           "id":self.id,
            "result":self.result
       }