import mongoose from 'mongoose';

const transactionSchema = new mongooses.schema ({
  requestedBy : {type : mongoose.schema.Types.objectId , ref:'user',required:true},
  approvedBy : {type:mongoose.model.Types.objectId , ref : 'user',required:true},
  issuedOn : {type:Date, required:true},
  returnDate : {type:Date , required:true},
  status : {type:String , required:true},
  items : [{type:mongoose.schema.Types.objectId, ref:'inventory'}]

})

export default mongoose.model('transaction',transactionSchema);