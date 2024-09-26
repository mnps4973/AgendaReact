import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-pink-200`}
    >
      <p className="text-[44px]">Agenda Project</p>
    </div>
  );
}
