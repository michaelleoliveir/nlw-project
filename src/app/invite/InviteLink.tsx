import React from "react";
import { InputField, InputIcon, InputRoot } from '@/components/Input';
import { Copy, Link } from 'lucide-react';
import IconButton from '@/components/IconButton';

const InviteLink = () => {
	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField
				readOnly
				defaultValue={"http://localhost:300/invite/dsadaser2324"}
			/>

			<IconButton className="-mr-2">
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
};

export default InviteLink;
