import z from "zod";

export const orderFormSchema = z.object({
  name: z.string().nonempty({ message: "品項名稱必填" }),
  price: z.string().nonempty({ message: "價格必填" }),
  size: z.string({
    required_error: "尺寸必填"
  }),
  note: z.string().optional()
});
