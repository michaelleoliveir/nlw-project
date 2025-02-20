"use client";

import Button from "@/components/Button";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { subscribeToEvent } from "@/http/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscriptionSchema = z.object({
	name: z.string().min(2, "Digite seu nome completo"),
	email: z.string().email("Digite um email válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

const SubscriptionForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	});

	async function onSubscribe({ name, email }: SubscriptionSchema) {
		const { subscriberId } = await subscribeToEvent({ name, email });

		router.push(`/invite/${subscriberId}`);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>

			<div className="space-y-3">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User />
						</InputIcon>
						<InputField
							{...register("name")}
							type="text"
							placeholder="Nome completo"
							autoComplete="off"
						/>
					</InputRoot>

					{errors.name && <p className="text-danger">{errors.name.message}</p>}
				</div>

				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail />
						</InputIcon>
						<InputField {...register("email")} placeholder="E-mail" autoComplete="off" />
					</InputRoot>

					{errors.email && (
						<p className="text-danger">{errors.email.message}</p>
					)}
				</div>
			</div>

			<Button>
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
};

export default SubscriptionForm;
