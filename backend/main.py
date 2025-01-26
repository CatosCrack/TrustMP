import data_process, database

db = database.Database()
processor = data_process.Data_Process(db)

# Get MP data and send to firestore
#mps = processor.parse_mp_data()
#for mp in mps:
    #db.upload_mp(mp)
    #print("MP uploaded")

# Get bill data and send to firestore
bills = processor.parse_bill_data()

