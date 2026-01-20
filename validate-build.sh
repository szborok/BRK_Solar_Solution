#!/bin/bash

# Pre-deployment validation script
# This script runs all checks before building for production

set -e  # Exit on error

echo "🔍 Starting pre-deployment validation..."
echo ""

# Check 1: TypeScript compilation
echo "📋 Checking TypeScript..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
  echo "✅ TypeScript check passed"
else
  echo "❌ TypeScript errors found!"
  exit 1
fi
echo ""

# Check 2: ESLint
echo "🎨 Checking code quality with ESLint..."
npx eslint . --ext .ts,.tsx --max-warnings 0
if [ $? -eq 0 ]; then
  echo "✅ ESLint check passed"
else
  echo "❌ ESLint errors found!"
  exit 1
fi
echo ""

# Check 3: Next.js build
echo "🔨 Building Next.js application..."
next build
if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed!"
  exit 1
fi
echo ""

echo "✅ All pre-deployment checks passed!"
echo "✅ Ready to deploy!"
