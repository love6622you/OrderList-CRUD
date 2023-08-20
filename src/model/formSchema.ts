import z from "zod";
import { NOTE_MAX_LENGTH } from "@/constant/input";

export const orderFormSchema = z.object({
  name: z.string().nonempty({ message: "品項名稱必填" }),
  price: z
    .string()
    .nonempty({ message: "價格必填" })
    .regex(/^[0-9]*$/, "僅輸入輸字"),
  size: z.string({
    required_error: "尺寸必填"
  }),
  note: z
    .string()
    .max(NOTE_MAX_LENGTH, `最大為 ${NOTE_MAX_LENGTH} 字元`)
    .optional()
});
