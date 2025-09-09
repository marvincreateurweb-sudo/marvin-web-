#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Marvin Lacroix
Tests all portfolio endpoints to ensure they work correctly
"""

import requests
import json
import sys
from typing import Dict, Any, List

# Get backend URL from frontend .env
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"❌ Error reading backend URL: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not determine backend URL")
    sys.exit(1)

print(f"🔗 Testing backend at: {BACKEND_URL}")

class PortfolioAPITester:
    def __init__(self, base_url: str):
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.timeout = 10
        self.test_results = []
        
    def log_test(self, endpoint: str, success: bool, message: str, details: Dict = None):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {endpoint}: {message}")
        
        self.test_results.append({
            'endpoint': endpoint,
            'success': success,
            'message': message,
            'details': details or {}
        })
        
        if details and not success:
            print(f"   Details: {json.dumps(details, indent=2)}")
    
    def test_root_endpoint(self):
        """Test GET /api/ - should return welcome message"""
        try:
            response = self.session.get(f"{self.base_url}/api/")
            
            if response.status_code == 200:
                data = response.json()
                expected_message = "Portfolio Marvin Lacroix API - Ready!"
                
                if data.get("message") == expected_message:
                    self.log_test("GET /api/", True, "Welcome message correct")
                else:
                    self.log_test("GET /api/", False, f"Wrong message. Got: {data.get('message')}")
            else:
                self.log_test("GET /api/", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/", False, f"Request failed: {str(e)}")
    
    def test_personal_info(self):
        """Test GET /api/portfolio/personal - should return Marvin's personal info"""
        try:
            response = self.session.get(f"{self.base_url}/api/portfolio/personal")
            
            if response.status_code == 200:
                data = response.json()
                
                # Check required fields
                required_fields = ['name', 'title', 'location', 'email', 'phone', 'tagline', 'description']
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("GET /api/portfolio/personal", False, 
                                f"Missing fields: {missing_fields}", data)
                    return
                
                # Check specific values
                expected_email = "marvin.ceateurweb@gmail.com"
                expected_phone = "07 70 06 10 75"
                expected_name = "Marvin Lacroix"
                
                issues = []
                if data.get('email') != expected_email:
                    issues.append(f"Email: expected '{expected_email}', got '{data.get('email')}'")
                if data.get('phone') != expected_phone:
                    issues.append(f"Phone: expected '{expected_phone}', got '{data.get('phone')}'")
                if data.get('name') != expected_name:
                    issues.append(f"Name: expected '{expected_name}', got '{data.get('name')}'")
                
                if issues:
                    self.log_test("GET /api/portfolio/personal", False, 
                                f"Data validation failed: {'; '.join(issues)}", data)
                else:
                    self.log_test("GET /api/portfolio/personal", True, 
                                f"Personal info correct (email: {data['email']}, phone: {data['phone']})")
            else:
                self.log_test("GET /api/portfolio/personal", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/portfolio/personal", False, f"Request failed: {str(e)}")
    
    def test_services(self):
        """Test GET /api/portfolio/services - should return services and benefits"""
        try:
            response = self.session.get(f"{self.base_url}/api/portfolio/services")
            
            if response.status_code == 200:
                data = response.json()
                
                # Check structure
                if 'headline' not in data or 'benefits' not in data:
                    self.log_test("GET /api/portfolio/services", False, 
                                "Missing 'headline' or 'benefits' fields", data)
                    return
                
                benefits = data.get('benefits', [])
                if not isinstance(benefits, list):
                    self.log_test("GET /api/portfolio/services", False, 
                                "Benefits should be a list", data)
                    return
                
                # Check benefits structure
                for i, benefit in enumerate(benefits):
                    required_benefit_fields = ['icon', 'title', 'description']
                    missing = [field for field in required_benefit_fields if field not in benefit]
                    if missing:
                        self.log_test("GET /api/portfolio/services", False, 
                                    f"Benefit {i} missing fields: {missing}", data)
                        return
                
                self.log_test("GET /api/portfolio/services", True, 
                            f"Services data correct ({len(benefits)} benefits)")
            else:
                self.log_test("GET /api/portfolio/services", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/portfolio/services", False, f"Request failed: {str(e)}")
    
    def test_projects(self):
        """Test GET /api/portfolio/projects - should return 4 projects"""
        try:
            response = self.session.get(f"{self.base_url}/api/portfolio/projects")
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_test("GET /api/portfolio/projects", False, 
                                "Response should be a list", {'type': type(data).__name__})
                    return
                
                expected_count = 4
                if len(data) != expected_count:
                    self.log_test("GET /api/portfolio/projects", False, 
                                f"Expected {expected_count} projects, got {len(data)}")
                    return
                
                # Check expected project names
                expected_projects = [
                    "Le Bistro des Alpes",
                    "Brasserie du Centre", 
                    "Saveurs & Événements",
                    "Artisan Bois Alpin"
                ]
                
                project_names = [project.get('name') for project in data]
                missing_projects = [name for name in expected_projects if name not in project_names]
                
                if missing_projects:
                    self.log_test("GET /api/portfolio/projects", False, 
                                f"Missing projects: {missing_projects}", 
                                {'found_projects': project_names})
                    return
                
                # Check project structure
                required_fields = ['id', 'name', 'type', 'description', 'objectives', 
                                 'features', 'colors', 'typography', 'image', 'results']
                
                for project in data:
                    missing_fields = [field for field in required_fields if field not in project]
                    if missing_fields:
                        self.log_test("GET /api/portfolio/projects", False, 
                                    f"Project '{project.get('name')}' missing fields: {missing_fields}")
                        return
                
                self.log_test("GET /api/portfolio/projects", True, 
                            f"All 4 projects found with correct structure")
            else:
                self.log_test("GET /api/portfolio/projects", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/portfolio/projects", False, f"Request failed: {str(e)}")
    
    def test_pricing(self):
        """Test GET /api/portfolio/pricing - should return 3 pricing packages"""
        try:
            response = self.session.get(f"{self.base_url}/api/portfolio/pricing")
            
            if response.status_code == 200:
                data = response.json()
                
                if 'packages' not in data:
                    self.log_test("GET /api/portfolio/pricing", False, 
                                "Missing 'packages' field", data)
                    return
                
                packages = data.get('packages', [])
                if not isinstance(packages, list):
                    self.log_test("GET /api/portfolio/pricing", False, 
                                "Packages should be a list", data)
                    return
                
                expected_count = 3
                if len(packages) != expected_count:
                    self.log_test("GET /api/portfolio/pricing", False, 
                                f"Expected {expected_count} packages, got {len(packages)}")
                    return
                
                # Check expected packages
                expected_packages = [
                    {"name": "Starter", "price": "890"},
                    {"name": "Business", "price": "2490"},
                    {"name": "Premium", "price": "4990"}
                ]
                
                package_info = [(pkg.get('name'), pkg.get('price')) for pkg in packages]
                expected_info = [(pkg['name'], pkg['price']) for pkg in expected_packages]
                
                missing_packages = [info for info in expected_info if info not in package_info]
                
                if missing_packages:
                    self.log_test("GET /api/portfolio/pricing", False, 
                                f"Missing packages: {missing_packages}", 
                                {'found_packages': package_info})
                    return
                
                # Check package structure
                required_fields = ['name', 'price', 'description', 'features', 'popular', 'color']
                
                for package in packages:
                    missing_fields = [field for field in required_fields if field not in package]
                    if missing_fields:
                        self.log_test("GET /api/portfolio/pricing", False, 
                                    f"Package '{package.get('name')}' missing fields: {missing_fields}")
                        return
                
                self.log_test("GET /api/portfolio/pricing", True, 
                            f"All 3 pricing packages found (Starter 890€, Business 2490€, Premium 4990€)")
            else:
                self.log_test("GET /api/portfolio/pricing", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/portfolio/pricing", False, f"Request failed: {str(e)}")
    
    def test_testimonials(self):
        """Test GET /api/portfolio/testimonials - should return 3 testimonials"""
        try:
            response = self.session.get(f"{self.base_url}/api/portfolio/testimonials")
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_test("GET /api/portfolio/testimonials", False, 
                                "Response should be a list", {'type': type(data).__name__})
                    return
                
                expected_count = 3
                if len(data) != expected_count:
                    self.log_test("GET /api/portfolio/testimonials", False, 
                                f"Expected {expected_count} testimonials, got {len(data)}")
                    return
                
                # Check testimonial structure
                required_fields = ['name', 'business', 'text', 'rating', 'image']
                
                for testimonial in data:
                    missing_fields = [field for field in required_fields if field not in testimonial]
                    if missing_fields:
                        self.log_test("GET /api/portfolio/testimonials", False, 
                                    f"Testimonial missing fields: {missing_fields}")
                        return
                    
                    # Check rating is valid
                    rating = testimonial.get('rating')
                    if not isinstance(rating, int) or rating < 1 or rating > 5:
                        self.log_test("GET /api/portfolio/testimonials", False, 
                                    f"Invalid rating: {rating} (should be 1-5)")
                        return
                
                self.log_test("GET /api/portfolio/testimonials", True, 
                            f"All 3 testimonials found with correct structure")
            else:
                self.log_test("GET /api/portfolio/testimonials", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("GET /api/portfolio/testimonials", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Portfolio API Tests")
        print("=" * 50)
        
        # Run all tests
        self.test_root_endpoint()
        self.test_personal_info()
        self.test_services()
        self.test_projects()
        self.test_pricing()
        self.test_testimonials()
        
        # Summary
        print("\n" + "=" * 50)
        print("📊 TEST SUMMARY")
        print("=" * 50)
        
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        
        if passed == total:
            print("🎉 ALL TESTS PASSED!")
            return True
        else:
            print("❌ SOME TESTS FAILED!")
            print("\nFailed Tests:")
            for result in self.test_results:
                if not result['success']:
                    print(f"  - {result['endpoint']}: {result['message']}")
            return False

def main():
    """Main test function"""
    if not BACKEND_URL:
        print("❌ Backend URL not found")
        return False
    
    tester = PortfolioAPITester(BACKEND_URL)
    success = tester.run_all_tests()
    
    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)