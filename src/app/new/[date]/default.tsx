import LogEntry from '../components/LogEntry';
export default function Page({ params }: { params: { date: string } }) {
    return <div>{params.date}</div>;
}
