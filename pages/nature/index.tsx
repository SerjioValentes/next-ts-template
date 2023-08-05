import React from 'react';
import ImagesGallery from '@/components/organism/ImagesGallery';

function Nature() {
  const galleryName = 'nature';

  return (
    <div>
      <ImagesGallery galleryName={galleryName} />
    </div>
  );
}

export default Nature;
