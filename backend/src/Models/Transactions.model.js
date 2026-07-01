import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema ({
  requestedBy : {type : mongoose.Schema.Types.ObjectId , ref:'user',required:true},
  approvedBy : {type:mongoose.Schema.Types.ObjectId , ref : 'user',required:true},
  issuedOn : {type:Date, required:true},
  returnDate : {type:Date , required:true},
  status : {type:String , required:true},
  items : [{type:mongoose.Schema.Types.ObjectId, ref:'inventory'}]

})

export default mongoose.model('transaction',transactionSchema);