import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
        <Link href={'/'}><Button size={'icon'} className="rounded-full fixed left-1/2 bottom-5" ><Home size={20} /></Button></Link>
        {children}
    </div>
  )
}