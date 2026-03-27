"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <CardTitle>Meus Tickets</CardTitle>
        <Separator />
        <CardDescription>0 Tickets encontrados</CardDescription>
        <div className="flex flex-row space-x-4">
          <Input></Input>
          <Button>Todos</Button>
          <Button>Ativos</Button>
          <Button>Usados</Button>
          <Button>Cancelados</Button>
          <Button className="bg-chart-2">Remover filtro</Button>
        </div>
        <Card className="flex flex-row bg-muted px-4">
          {mockedTickets.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col w-min hover:bg-secondary hover:cursor-pointer"
            >
              <Sheet>
                <SheetTrigger>
                  <div className="flex flex-col items-start hover:cursor-pointer">
                    <CardContent>{item.eventName}</CardContent>
                    <CardContent>{item.attendeeName}</CardContent>
                    <CardContent>{item.attendeeEmail}</CardContent>
                    <div className="flex flex-row">
                      <CardContent>{item.ticketTypeTitle}</CardContent>
                      <CardContent>{item.status}</CardContent>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Ticket - {item.eventName}</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </Card>
          ))}
        </Card>
      </Card>
    </>
  );
};

export default Tickets;
