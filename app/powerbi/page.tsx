'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  ExternalLink,
  ArrowLeft,
  Loader2,
  Maximize2,
  Minimize2,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'

// Power BI Studio URL - change this to deployed URL in production
const POWERBI_STUDIO_URL = process.env.NEXT_PUBLIC_POWERBI_STUDIO_URL || 'http://localhost:5173'

export default function PowerBIStudioPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
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
    <div className={`min-h-screen bg-slate-950 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <header className={`border-b border-white/10 bg-slate-900/80 backdrop-blur-xl ${isFullscreen ? 'hidden' : ''}`}>
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Quay lại</span>
            </Link>
            <div className="h-6 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <LayoutDashboard className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-white">Power BI Layout Studio</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshIframe}
              className="text-slate-400 hover:text-white"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-slate-400 hover:text-white"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-slate-400 hover:text-white"
            >
              <a href={POWERBI_STUDIO_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Mở tab mới
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Fullscreen header */}
      {isFullscreen && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleFullscreen}
            className="bg-slate-800/80 backdrop-blur text-white hover:bg-slate-700"
          >
            <Minimize2 className="h-4 w-4 mr-2" />
            Thoát fullscreen
          </Button>
        </div>
      )}

      {/* Main Content */}
      <main className={`relative ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-56px)]'}`}>
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

        {/* Iframe */}
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
