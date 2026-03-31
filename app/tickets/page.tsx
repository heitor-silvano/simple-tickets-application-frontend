"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState<
    {
      eventTitle?: string | null;
      attendeeName?: string | null;
      attendeeEmail: string;
      ticketTypeTitle?: string | null;
      status: string;
      hashId: string | null;
      location: string | null;
      eventImage?: string | null;
      createdAt: Date;
      eventStartDate?: Date | null;
      eventEndDate?: Date | null;
    }[]
  >([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:3001/tickets");

        const data = await response.json();

        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <>
      <Card className="p-8">
        <CardTitle>Meus Tickets</CardTitle>
        <Separator />
        <CardDescription>0 Tickets encontrados</CardDescription>
        <div className="flex flex-row space-x-4">
          <Input></Input>
          <Button>Ativos</Button>
          <Button>Encerrados</Button>
          <Button>Cancelados</Button>
          <Button className="bg-chart-2">Remover filtro</Button>
        </div>
        <Card className="flex flex-row bg-muted px-4">
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              className="flex flex-col py-0 w-min hover:bg-secondary hover:cursor-pointer"
            >
              <Sheet>
                <SheetTrigger>
                  <div className="flex flex-col items-start hover:cursor-pointer">
                    <div className="relative w-full h-30 aspect-video">
                      <Image
                        src={ticket.eventImage ?? ""}
                        fill
                        alt={ticket.eventTitle ?? ""}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start py-4">
                      <CardContent>{ticket.eventTitle}</CardContent>
                      <CardContent>{ticket.attendeeName}</CardContent>
                      <CardContent>{ticket.attendeeEmail}</CardContent>
                      <div className="flex flex-row">
                        <CardContent>{ticket.ticketTypeTitle}</CardContent>
                        <CardContent>{ticket.status}</CardContent>
                      </div>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <div className="p-5">
                    <SheetTitle>Ticket - {ticket.eventTitle}</SheetTitle>
                  </div>
                  <div className="relative w-full h-50 aspect-video">
                    <Image
                      src={ticket.eventImage ?? ""}
                      fill
                      alt={ticket.eventTitle ?? ""}
                      className="object-cover"
                    />
                  </div>
                  <SheetHeader>
                    <SheetDescription>
                      Comprado em{" "}
                      {/* {Intl.DateTimeFormat("pt-br").format(item.createdAt)} */}
                    </SheetDescription>
                    <SheetDescription>
                      Nota: não exponha seu QR Code, nem mesmo parcialmente.
                      {ticket.hashId && (
                        <QRCodeSVG
                          value={ticket.hashId}
                          className="w-full h-auto px-8 py-4"
                        />
                      )}
                      {ticket.hashId}
                    </SheetDescription>
                    <SheetTitle>Data</SheetTitle>
                    {
                      <SheetDescription>
                        {ticket.eventStartDate
                          ? Intl.DateTimeFormat("pt-br", {
                              weekday: "long",
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            }).format(new Date(ticket.eventStartDate))
                          : "--"}
                      </SheetDescription>
                    }
                    <SheetTitle>Local</SheetTitle>
                    <SheetDescription>{ticket.location}</SheetDescription>
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
