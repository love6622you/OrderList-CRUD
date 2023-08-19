import zod from "zod";

export const orderFormSchema = zod.object({
  name: zod
    .string({
      required_error: "品項名稱必填"
    })
    .nonempty({ message: "該欄位不能為空" }),
  price: zod
    .string({
      required_error: "價格必填"
    })
    .nonempty({ message: "該欄位不能為空" }),
  size: zod
    .string({
      required_error: "尺寸必填"
    })
    .nonempty({ message: "該欄位不能為空" }),
  note: zod.string().optional()
});
