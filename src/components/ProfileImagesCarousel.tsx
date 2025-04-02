
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProfileImagesCarousel = () => {
  return (
    <div className="w-full max-w-xs md:max-w-sm mx-auto mb-8">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/636d3116-22f3-4acb-8421-fc587b9c51b9.png" 
                alt="Victor in a winter coat" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a692a8eb-165a-4003-9bd1-76b137ed0cac.png" 
                alt="Victor with colleagues at work" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/4b1abb75-e0f4-4c6f-b754-5941a066e1e1.png" 
                alt="Victor smiling selfie" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/1dc8372e-cc6e-4b4b-bf25-74fc5bca8186.png" 
                alt="Victor thoughtful pose" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/baae4540-c115-436f-9e9e-da512f2541d6.png" 
                alt="Cocktails prepared by Victor" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
};

export default ProfileImagesCarousel;
