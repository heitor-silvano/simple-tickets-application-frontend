import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Tickets = () => {
  const mockedTickets = [
    {
      eventName: "Evento teste",
      attendeeName: "Heitorito",
      attendeeEmail: "heitor.nunes182@hotmail.com",
      ticketTypeTitle: "Comum",
      status: "Teste",
    },
    {
      eventName: "Evento teste",
      attendeeName: "Heitorito",
      attendeeEmail: "heitor.nunes182@hotmail.com",
      ticketTypeTitle: "Comum",
      status: "Teste",
    },
  ];

  return (
    <>
      <Card className="p-8">
        <CardHeader>
          <CardTitle>Meus Tickets</CardTitle>
        </CardHeader>
        <CardDescription>0 Tickets encontrados</CardDescription>
        {mockedTickets.map((item, index) => (
          <div className="flex flex-row">
            <Card key={index} className="flex flex-col w-min">
              <CardContent>{item.eventName}</CardContent>
              <CardContent>{item.attendeeName}</CardContent>
              <CardContent>{item.attendeeEmail}</CardContent>
              <div className="flex flex-row">
                <CardContent>{item.ticketTypeTitle}</CardContent>
                <CardContent>{item.status}</CardContent>
              </div>
            </Card>
          </div>
        ))}
      </Card>
    </>
  );
};

export default Tickets;
