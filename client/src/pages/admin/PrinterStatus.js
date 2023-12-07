import AdminLayout from "../../components/AdminLayout";
import PrinterStatusCard from "../../components/PrinterStatusCard";

export default function PrinterStatus() {
    return (
        <AdminLayout>
            <article className="printer-status">
                <div className="util"></div>
                <PrinterStatusCard 
                    active={true} 
                    title="114H6"
                    printJobCount={20}
                    printArea={100}
                    productivity={90}
                />
            </article>
        </AdminLayout>
    );
}