import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Star, Clock, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { OfferCode } from "@shared/schema";

export default function PromotionBanner() {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string>("");

  // Default offers if API returns empty
  const defaultOffers = [
    {
      id: "mentodesk30",
      code: "MENTODESK30",
      title: "30% Off Starter Plan",
      description: "Get instant career clarity with a dedicated 1-on-1 mentorship session at 30% off. Perfect for quick solutions and immediate guidance.",
      discountType: "percentage",
      discountValue: "30",
      validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      isActive: true,
    },
    {
      id: "mentodesk50",
      code: "MENTODESK50",
      title: "50% Off Pro/Elite Plan",
      description:
        "Level up your career with pro or elite plans. Get 50% off focused guidance, progress tracking, and complete transformation.",
      discountType: "percentage",
      discountValue: "50",
      validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      isActive: true,
    },
  ];

  const displayOffers = defaultOffers;
  const activeOffers = (displayOffers as any[])
    .filter((offer) => offer.isActive)
    .slice(0, 2);

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast({
        title: "Code Copied!",
        description: `Offer code ${code} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy code. Please copy manually.",
        variant: "destructive",
      });
    }
  };

  if (activeOffers.length === 0) {
    return null;
  }

  return (
    <section id="offers" className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-6 right-12 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Limited Time Offers</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Exclusive Discounts for New Members
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Start your mentorship plan with amazing savings. Use these codes
            during onboarding!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activeOffers.map((offer: any, index: number) => {
            const isPopular = index === 1;

            return (
              <Card
                key={offer.id}
                className="relative bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-offer-${offer.code.toLowerCase()}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-yellow-900 px-4 py-1 font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {offer.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-green-600">
                        {offer.discountType === "percentage"
                          ? `${offer.discountValue}%`
                          : `$${offer.discountValue}`}
                      </div>
                      <div className="text-xs text-gray-500">OFF</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">OFFER CODE</p>
                        <p
                          className="font-mono font-bold text-lg text-gray-900"
                          data-testid={`text-code-${offer.code.toLowerCase()}`}
                        >
                          {offer.code}
                        </p>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(offer.code)}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                        data-testid={`button-copy-${offer.code.toLowerCase()}`}
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {offer.validUntil && (
                    <div className="flex items-center space-x-2 text-green-600 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>
                        Valid until{" "}
                        {new Date(offer.validUntil).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            * Codes can be applied during the onboarding process.
          </p>
        </div>
      </div>
    </section>
  );
}
