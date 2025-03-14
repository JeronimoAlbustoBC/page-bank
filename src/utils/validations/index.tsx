export const validaNombre = (value: string) => {
  return validaString(value, { required: true, min: 6, max: 100 });
};
export const validaId = (value: string) => {
  const regex = /^\d{11}$/;
  return validaString(value, { required: true, regex });
  return true;
};
export const validaTelefono = (value: string) => {
  const regex =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  return validaString(value, { required: true, regex });
};
export const validaEmail = (value: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return validaString(value, { required: true, regex });
};
export const validaMensaje = (value: string) => {
  return true;
};
export const validaString = (
  val: string,
  rules: {
    min?: number;
    max?: number;
    required?: boolean;
    regex?: RegExp;
  }
) => {
  if (rules.min !== undefined && val.length < rules.min) return false;
  if (rules.max !== undefined && val.length > rules.max) return false;
  if (
    rules.required !== undefined &&
    val.length === 0 &&
    (rules.required || false)
  )
    return false;
  if (rules.regex !== undefined) {
    if (!rules.regex.test(val)) {
      return false;
    }
  }

  return true;
};
