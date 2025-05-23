import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MyItemProps = {
  value: string;
  triggerTitle: string;
  toolInfo: string;
  contentTitle: string;
  starImage: string;
  links: string[][];
  contentListItems: string[];
  screenshotsItems: string[][];
};

export function MyItem({
  value,
  triggerTitle,
  toolInfo,
  contentTitle,
  starImage,
  links,
  contentListItems,
  screenshotsItems,
}: MyItemProps) {
  return (
    <AccordionItem value={value} className="text-white border-none">
      <AccordionTrigger className="mb-2 flex items-center">
        {triggerTitle}
        <span
          className="text-[0.7rem]"
          dangerouslySetInnerHTML={{ __html: `CPU: ${toolInfo}` }}
        />
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold underline">{contentTitle}</h3>
          <img src={starImage} alt="image" />
        </div>
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a key={index} className="font-bold" href={link[1]} target="_blank">
              {link[0]}
            </a>
          ))}
        </div>
        <ul className="text-left list-disc ml-5">
          {contentListItems.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <Accordion type="single" collapsible className="mt-4 mb-8">
          <AccordionItem value="item-1" className="text-white">
            <AccordionTrigger>
              <span className="w-full text-center underline">Скриншоты</span>
            </AccordionTrigger>
            <AccordionContent>
              {screenshotsItems.length > 0 && (
                <Carousel className="text-white relative">
                  <CarouselContent className="text-white">
                    {screenshotsItems.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="text-2xl mb-2">{item[0]}</div>
                        <div className="flex justify-center items-center">
                          <img src={item[1]} alt="image" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-white hover:text-white absolute top-1/2 left-0 h-15" />
                  <CarouselNext className="text-white hover:text-white absolute top-1/2 right-0 h-15" />
                </Carousel>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
}
