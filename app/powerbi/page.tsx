'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react'

// Power BI Studio URL - change this to deployed URL in production
const POWERBI_STUDIO_URL = process.env.NEXT_PUBLIC_POWERBI_STUDIO_URL || 'http://localhost:5173'

export default function PowerBIStudioPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if the Power BI Studio is accessible
    const checkAvailability = async () => {
      try {
        // We can't actually fetch due to CORS, so we'll just set a timeout
        const timeout = setTimeout(() => {
          setIsLoading(false)
        }, 2000)
        return () => clearTimeout(timeout)
      } catch {
        setHasError(true)
        setIsLoading(false)
      }
    }
    checkAvailability()
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const refreshIframe = () => {
    setIsLoading(true)
    setHasError(false)
    // Force iframe reload by updating key
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframe.src = iframe.src
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-950">
      {/* Main Content - Full screen iframe */}
      <main className="relative h-full w-full">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
            <div className="text-center">
              <Loader2 className="h-10 w-10 text-amber-500 animate-spin mx-auto mb-4" />
              <p className="text-slate-400">Đang tải Power BI Studio...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
            <div className="text-center max-w-md">
              <div className="h-16 w-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
                <LayoutDashboard className="h-8 w-8 text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Không thể tải Power BI Studio
              </h2>
              <p className="text-slate-400 mb-6">
                Power BI Studio có thể chưa được khởi động hoặc không khả dụng.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={refreshIframe}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Thử lại
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-slate-700 text-slate-300"
                >
                  <a href={POWERBI_STUDIO_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Mở trong tab mới
                  </a>
                </Button>
              </div>
              <p className="text-xs text-slate-600 mt-6">
                URL: {POWERBI_STUDIO_URL}
              </p>
            </div>
          </div>
        )}

        {/* Iframe - Full screen */}
        <iframe
          src={POWERBI_STUDIO_URL}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Power BI Layout Studio"
          allow="clipboard-read; clipboard-write"
        />
      </main>
    </div>
  )
}
