import { LogOut } from 'lucide-react';
import NavLinks from '@/ui/account/nav-links';
import Button from '@/ui/button';

export default function Sidenav() {
	return (
		<div className="flex flex-col h-full space-y-1.5">
			<NavLinks />
			<div className="hidden md:block rounded-md grow w-full bg-gray-50" />
			<form>
				<Button intent="danger" className="w-full h-12 gap-x-2 p-4 rounded-md md:justify-start">
					<LogOut className="w-5"/>
					<p className="hidden md:block">Sign Out</p>
				</Button>
			</form>
		</div>
	);
}