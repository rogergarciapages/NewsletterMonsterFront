import React from 'react';
import { GithubLogoIcon, EnvelopeOpenIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"; // Adjust according to actual icons you have

// Define a type for the icon props
type IconProps = React.ComponentProps<'svg'>;

export const GithubIcon: React.FC<IconProps> = (props) => <GithubLogoIcon {...props} />;
export const GoogleIcon: React.FC<IconProps> = (props) => <LinkedInLogoIcon {...props} />; // Use appropriate Google icon
