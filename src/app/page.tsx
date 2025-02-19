import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { ArrowRight, Copy, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5"/>
          </InputIcon>

          <InputField/>
        </InputRoot>
      </div>
    </main>
  );
}
