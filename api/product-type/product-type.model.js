import mongoose, { Schema } from 'mongoose';
import { STATUS, FORMAT_DATE_DEFAULT } from '../../constant';
import { messageUtils } from '../../utils';
import moment from 'moment';

const DEFAULT_DATE = moment().format('YYYY-MM-DD HH:mm:ss');

const productTypeSchema = new Schema({
  name        : String,
  status      : { type: String, enum: STATUS.ENUM, default: STATUS.DEFAULT },
  images      : [{ name: String, url: String }],
  description : String,
  created_date: { type: Date, default: moment().format(FORMAT_DATE_DEFAULT) },
  created_user: { type: String, required: [true, messageUtils.required('created_date')] },
  updated_date: { type: Date, default: moment().format(FORMAT_DATE_DEFAULT) },
  updated_user: { type: String, required: [true, messageUtils.required('created_date')] }
});

productTypeSchema.pre('update', function (next) {
  this.updated_date = moment().format(FORMAT_DATE_DEFAULT);
  next();
});

const ProductType = mongoose.model('ProductType', productTypeSchema);

export default ProductType;
