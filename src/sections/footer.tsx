import Logo from "@/components/customized/Logo";

export default function Footer() {
    return (
        <footer className="px-6 py-12 w-full">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="flex justify-between border-t border-gray-100 py-6">
                    <Logo />
                    <p className="text-sm text-gray-500">Copyright © 2023 Vine. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}