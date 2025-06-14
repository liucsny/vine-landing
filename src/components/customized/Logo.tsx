import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-1.5">
            <Image src="/vine-logo.svg" alt="Vine" width={32} height={32} />
            <h1 className="text-lg italic text-gray-900 font-bold">Vine</h1>
        </div>
    );
}