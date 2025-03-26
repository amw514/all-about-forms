import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Hello World Of Forms</h1>
      <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <Link href="/youtube-form" className="text-lg font-medium">YouTube Form</Link>
      </Button>
    </div>
  );
}
