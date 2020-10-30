import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import './ProfileImage.scss';

let images = [
  "https://cdn.vox-cdn.com/thumbor/4rDBWtnZ7FDBL4fHNL-sLTAV8_k=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67108186/elon_musk_tesla_3036.0.jpg",
  "https://i.insider.com/5db1c746dee0192ce42bd6f7?width=1100&format=jpeg&auto=webp",
  "https://timesofindia.indiatimes.com/thumb/msid-78822418,imgsize-367641,width-400,resizemode-4/78822418.jpg",
  "https://businesstech.co.za/news/wp-content/uploads/2020/10/ElonMusk-e1603349893795.jpg",
  "https://www.sciencealert.com/images/2020-03/processed/elon_musk_topic_1024.jpg",
  "https://www.insidehook.com/wp-content/uploads/2020/04/Elon-Musk-Armchair.jpg?fit=1200%2C800",
  "https://bloximages.newyork1.vip.townnews.com/oanow.com/content/tncms/assets/v3/editorial/5/0a/50ae82ad-6caa-5061-82f5-7053c7b0b746/5f20ca855bee6.image.jpg",
  "https://www.ctvnews.ca/polopoly_fs/1.4936149.1589310640!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
];

function ProfileImage() {
  const [currentIndexs, setCurrentIndexs] = useState([0, 1, 2]);
  const [isLoading, setIsLoading] = useState(true);
  const items = images.slice(currentIndexs[0], currentIndexs[currentIndexs.length - 1] + 1);

  useEffect(() => {
    cacheImages(images);
  }, [])

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map(src => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  const handleNextButton = () => {
    let newIndexs = [...currentIndexs]
    if (newIndexs[newIndexs.length - 1] < images.length - 1) {
      newIndexs.push(currentIndexs[currentIndexs.length - 1] + 1);
      newIndexs.shift();
      setCurrentIndexs(newIndexs);
    }
  }

  const handlePrevButton = () => {
    let newIndexs = [...currentIndexs]
    if (newIndexs[0] > 0) {
      newIndexs.unshift(currentIndexs[0] - 1);
      newIndexs.pop();
      setCurrentIndexs(newIndexs);
    }
  }

  const imageElements = items.map((item, i) => (
    <div key={i} className="image">
      <img src={item} alt="" />
    </div>
  ));

  return (
    <div className='ProfileImage'>
      <div className="prev">
        <a onClick={handlePrevButton}>&#10094;</a>
      </div>
      <div className="ImageList">
        {isLoading 
          ? <Spinner active={true} />
          : imageElements
        }
      </div>
      <div className="next">
        <a onClick={handleNextButton}>&#10095;</a>
      </div>
    </div>
  );
}

export default ProfileImage;