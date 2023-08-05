import React from 'react';
import ImagesGallery from '@/components/organism/ImagesGallery';

function Portraits() {
  const galleryName = 'portraits';

  return (
    <div>
      <ImagesGallery galleryName={galleryName} />
    </div>
  );
}

export default Portraits;
