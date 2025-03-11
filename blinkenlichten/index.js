#include <FastLED.h>
#define LED_PIN 3
#define NUM_LEDS 20
#define BRIGHTNESS 255
#define LED_TYPE WS2811
#define COLOR_ORDER RGB
CRGB leds[NUM_LEDS];
#define OUT_PIN 2
uint8_t output_value = 0;
bool motion_detected = false;
void setup() {
  FastLED.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
  Serial.begin(9600);
  pinMode(OUT_PIN, INPUT);
   delay(1000);
}
void loop() {
  output_value = digitalRead(OUT_PIN);
  if (output_value) {
    Serial.println("Objekt erkannt!");
    // fill_solid(leds, NUM_LEDS, CRGB(255,0,0));
    //     FastLED.show();
  for (int i = 0; i < 256; i++) {
         fill_solid(leds, NUM_LEDS, CRGB(i, i, i));
    // leds[current_led % NUM_LEDS] = CRGB(i, i, i);
    FastLED.show();
    delay(10);
  }
    motion_detected = true;
    delay(10);
  } else {
  //         for (int i = 255; i >= 0; i--) {
  //         fill_solid(leds, NUM_LEDS, CRGB(i, i, i));
  //   //leds[current_led % NUM_LEDS] = CRGB(i, i, i);
  //   FastLED.show();
  //   delay(10);
  // }
         fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();
    delay(100);
    Serial.println("Kein Objekt!");
  }
  // if (motion_detected) {
  //   Serial.println("Warten!");
  //   delay(20);
  //   Serial.println("Bereit...");
  //   motion_detected = false;
  // }
}


