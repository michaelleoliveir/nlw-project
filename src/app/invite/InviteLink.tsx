"use client"

import React from "react";
import { InputField, InputIcon, InputRoot } from '@/components/Input';
import { Copy, Link } from 'lucide-react';
import IconButton from '@/components/IconButton';

interface InviteLinkInputProps {
	inviteLink: string
}

const InviteLink = ({inviteLink}: InviteLinkInputProps) => {
	function copyInviteLink () {
		navigator.clipboard.writeText(inviteLink)
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField
				readOnly
				defaultValue={inviteLink}
			/>

			<IconButton className="-mr-2" onClick={copyInviteLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
};

export default InviteLink;
