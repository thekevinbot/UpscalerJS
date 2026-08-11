"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRange = exports.isNumber = exports.hasValidChannels = exports.isValidModelType = exports.isString = exports.isTensor = exports.isThreeDimensionalTensor = exports.isFourDimensionalTensor = exports.isDynamicShape4D = exports.isFixedShape4D = exports.isShape4D = void 0;
exports.makeIsNDimensionalTensor = makeIsNDimensionalTensor;
const tf = __importStar(require("@tensorflow/tfjs-core"));
const isShape4D = (shape) => {
    if (!Boolean(shape) || !Array.isArray(shape) || shape.length !== 4) {
        return false;
    }
    return shape.every((value) => value === null || typeof value === 'number');
};
exports.isShape4D = isShape4D;
const isFixedShape4D = (shape) => (0, exports.isShape4D)(shape) && shape[1] !== null && shape[2] !== null && shape[1] > 0 && shape[2] > 0;
exports.isFixedShape4D = isFixedShape4D;
const isDynamicShape4D = (shape) => (0, exports.isShape4D)(shape) && !(0, exports.isFixedShape4D)(shape);
exports.isDynamicShape4D = isDynamicShape4D;
function makeIsNDimensionalTensor(rank) {
    function fn(pixels) {
        try {
            return pixels.shape.length === rank;
        }
        catch (err) {
        }
        return false;
    }
    return fn;
}
exports.isFourDimensionalTensor = makeIsNDimensionalTensor(4);
exports.isThreeDimensionalTensor = makeIsNDimensionalTensor(3);
const isTensor = (input) => input instanceof tf.Tensor;
exports.isTensor = isTensor;
const isString = (el) => typeof el === 'string';
exports.isString = isString;
const isValidModelType = (modelType) => typeof modelType === 'string' && ['layers', 'graph',].includes(modelType);
exports.isValidModelType = isValidModelType;
const hasValidChannels = (tensor) => tensor.shape.slice(-1)[0] === 3;
exports.hasValidChannels = hasValidChannels;
const isNumber = (el) => typeof el === 'number';
exports.isNumber = isNumber;
const isValidRange = (range) => Array.isArray(range) && range.length === 2 && range.every(exports.isNumber);
exports.isValidRange = isValidRange;
