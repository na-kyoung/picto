// Component for Adsense Banner

'use client';

import { useEffect } from 'react';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

export default function BannerAd() {
  useEffect(() => {
    const loadAd = async () => {
      try {
        // 초기화
        await AdMob.initialize({
          requestTrackingAuthorization: true,
          initializeForTesting: true, // 테스트용
        });

        // 배너 광고 표시
        await AdMob.showBanner({
          adId: 'ca-app-pub-3940256099942544/6300978111', // 테스트용 배너 광고 ID
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
          isTesting: true,
        });
      } catch (error) {
        console.warn('AdMob error:', error);
      }
    };

    loadAd();

    return () => {
      AdMob.removeBanner().catch((e) => console.warn('Remove banner error:', e));
    };
  }, []);

  return null;
}