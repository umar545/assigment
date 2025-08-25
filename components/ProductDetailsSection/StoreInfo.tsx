"use client";

import { MapPin, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface StoreInfoProps {
  name?: string;
  isVerified?: boolean;
  status?: string;
  rating?: number;
  location?: string;
  chatReply?: number;
  onFollow?: () => void;
  onVisit?: () => void;
  actions?: ReactNode;
}

export default function StoreInfo({
  name,
  isVerified = false,
  status = "Online",
  rating,
  location,
  chatReply,
  onFollow,
  onVisit,
  actions,
}: StoreInfoProps) {
  return (
    <div className="bg-white rounded-lg border p-3 sm:p-4 space-y-3 sm:space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {name}
              </h3>
              {isVerified && (
                <Badge variant="secondary" className="text-xs">
                  ✓
                </Badge>
              )}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">{status}</p>
          </div>
        </div>

        <div className="flex gap-2">
          {actions ? (
            actions
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm h-8 sm:h-9"
                onClick={onFollow}
              >
                Follow
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm h-8 sm:h-9"
                onClick={onVisit}
              >
                Visit Store
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="flex items-center justify-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">{rating}%</span>
          </div>
          <p className="text-xs text-gray-600">Rating Store</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            <span className="text-xs sm:text-sm font-medium">{location}</span>
          </div>
          <p className="text-xs text-gray-600">Location Store</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            <span className="text-xs sm:text-sm font-medium">{chatReply}%</span>
          </div>
          <p className="text-xs text-gray-600">Chat Reply</p>
        </div>
      </div>
    </div>
  );
}
