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

const Tickets = () => {
  const mockedTickets = [
    {
      eventName: "Neon Pulse Festival",
      attendeeName: "Heitorito",
      attendeeEmail: "heitor.nunes182@hotmail.com",
      ticketTypeTitle: "Comum",
      status: "Teste",
      hashId: "4aa4667970ba4c9f9a11fd13fe8c1a71518de318",
      location:
        "Av. das Nações Unidas, 17955 - Vila Almeida, São Paulo - SP, 04795-100",
      eventImage: "/NeonSign.jpg",
      createdAt: new Date(),
      eventStartDate: new Date("2026-11-22 18:00"),
      eventEndDate: new Date("2026-11-22 19:30"),
    },
    {
      eventName: "Code & Coffee Summit",
      attendeeName: "Heitorito",
      attendeeEmail: "heitor.nunes182@hotmail.com",
      ticketTypeTitle: "Comum",
      status: "Teste",
      hashId: "e208cf696247f0a4aa3e4947d6c1d09c56492362",
      location:
        "Av. das Nações Unidas, 17955 - Vila Almeida, São Paulo - SP, 04795-100",
      eventImage: "/CannabisCoffeeShopAmsterdam.jpg",
      createdAt: new Date(),
      eventStartDate: new Date("2026-11-12 15:00"),
      eventEndDate: new Date("2026-10-22 17:30"),
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
          <Button>Ativos</Button>
          <Button>Encerrados</Button>
          <Button>Cancelados</Button>
          <Button className="bg-chart-2">Remover filtro</Button>
        </div>
        <Card className="flex flex-row bg-muted px-4">
          {mockedTickets.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col py-0 w-min hover:bg-secondary hover:cursor-pointer"
            >
              <Sheet>
                <SheetTrigger>
                  <div className="flex flex-col items-start hover:cursor-pointer">
                    <div className="relative w-full h-30 aspect-video">
                      <Image
                        src={item.eventImage}
                        fill
                        alt={item.eventName}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start py-4">
                      <CardContent>{item.eventName}</CardContent>
                      <CardContent>{item.attendeeName}</CardContent>
                      <CardContent>{item.attendeeEmail}</CardContent>
                      <div className="flex flex-row">
                        <CardContent>{item.ticketTypeTitle}</CardContent>
                        <CardContent>{item.status}</CardContent>
                      </div>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <div className="p-5">
                    <SheetTitle>Ticket - {item.eventName}</SheetTitle>
                  </div>
                  <div className="relative w-full h-50 aspect-video">
                    <Image
                      src={item.eventImage}
                      fill
                      alt={item.eventName}
                      className="object-cover"
                    />
                  </div>
                  <SheetHeader>
                    <SheetDescription>
                      Comprado em{" "}
                      {Intl.DateTimeFormat("pt-br").format(item.createdAt)}
                    </SheetDescription>
                    <SheetDescription>
                      Nota: não exponha seu QR Code, nem mesmo parcialmente.
                      <QRCodeSVG
                        value={item.hashId}
                        className="w-full h-auto px-8 py-4"
                      />
                      {item.hashId}
                    </SheetDescription>
                    <SheetTitle>Data</SheetTitle>
                    <SheetDescription>
                      {Intl.DateTimeFormat("pt-br", {
                        weekday: "long",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(item.eventStartDate)}
                    </SheetDescription>
                    <SheetTitle>Local</SheetTitle>
                    <SheetDescription>{item.location}</SheetDescription>
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
