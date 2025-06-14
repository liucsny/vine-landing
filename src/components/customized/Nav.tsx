// import Image from "next/image";
import Logo from "@/components/customized/Logo";
import { Button } from "@/components/ui/button";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between w-full px-6 py-3 absolute top-0 left-0">
            <div className="flex items-center gap-14">
                <Logo />
                <ul className="flex items-center gap-7 text-sm text-gray-600 font-medium">
                    <li>Home</li>
                    <li>Models</li>
                    <li>Workflows</li>
                    <li>Assets</li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                {/* <Button className="text-sm text-gray-900 font-medium bg-gray-300/30 hover:bg-gray-300/80 px-4 py-1.5 rounded-md">Login</Button> */}
                <Button variant="secondary">Login</Button>
            </div>
        </nav>
    );
}