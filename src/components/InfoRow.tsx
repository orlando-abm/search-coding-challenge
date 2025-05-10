export const InfoRow = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
    <p className="text-sm text-neutral-600 flex items-center gap-2">
        {icon} {children}
    </p>
);
