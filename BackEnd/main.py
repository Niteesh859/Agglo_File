from flask import jsonify,request
from config import app,db
from models import LifestyleSurvey,Tests,Ress
from sqlalchemy.exc import SQLAlchemyError

@app.route("/survey",methods=["GET"])
def get_details():
   survey = LifestyleSurvey.query.all()
   json_survey=list(map(lambda x: x.to_json(),survey))   
   # for item in json_survey:
   #      item.pop('_sa_instance_state', None)
   return  jsonify({"survey":json_survey})

@app.route("/create_survey",methods=["POST"])
def create_survey():
   LifestyleSurvey.query.delete()
   db.session.commit()
   name= request.json.get("name")
   age=request.json.get("age")
   gender= request.json.get("gender")
   time_sports= request.json.get("time_sports")
   time_reading=request.json.get("time_reading")
   time_video_games=request.json.get("time_video_games")
   time_studying=request.json.get("time_studying")
   time_tv= request.json.get("time_tv")
   mom=request.json.get("mom")
   dad=request.json.get("dad")
   
   new_survey=LifestyleSurvey(name=name,age=age,gender=gender,time_sports=time_sports,time_reading=time_reading,time_video_games=time_video_games,time_studying=time_studying,time_tv=time_tv,mom=mom,dad=dad)
   try: 
      db.session.add(new_survey)
      db.session.commit()
   except Exception as e:
      return jsonify({"message": str(e)}),400
   
   return jsonify({"message" :"User created"}),201


@app.route("/test",methods=["GET"])
def tes():
   tests=Tests.query.all()
   json_surve=list(map(lambda x: x.to_json(),tests))   
   return  jsonify({"survey":json_surve})


@app.route('/result',methods=["GET"])
def res():
   ress =Res.query.all()
 


@app.route("/delete", methods=["DELETE"])
def delete_all():
    try:
        num_deleted = LifestyleSurvey.query.delete()
        db.session.commit()
        return jsonify({
            "success": True,
            "message": f"Successfully deleted {num_deleted} records",
            "records_deleted": num_deleted
        }), 200
        
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": "Failed to delete records",
            "error": str(e)
        }), 500

 
 
if __name__ == "__main__":
   with app.app_context():
      db.create_all()

   app.run(debug=True)