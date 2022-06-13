import yup from "./validator";

const veiculoValidator = yup.object().shape({
  veiculo: yup.string().max(200).min(3).required(),
  marca: yup.string().max(200).min(3).required(),
  ano: yup.string().required(),
  descricao: yup.string().max(200).min(10).required(),
  vendido: yup.string().required(),
});
export default veiculoValidator;
