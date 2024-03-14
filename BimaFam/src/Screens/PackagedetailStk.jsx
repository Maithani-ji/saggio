import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Packagedetails = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingVertical: 10,
          padding: 20,
          height: '10%',
        }}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../assets/backicon.png')} // Update with the actual path to your back button image
            style={{
              width: 24,
              height: 24,
              tintColor: 'black', // You can customize the color of the back button
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black'}}>Package Details</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{margin: 10, flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', padding: 15}}>
          <Text style={{color: '#0e4caf', fontSize: 22, fontWeight: 'bold'}}>
            LIC Jeevan Umang
          </Text>
        </View>

        {/* Content about LIC Jeevan Umang with black text color */}
        <View style={{padding: 20}}>
          <Text style={{color: 'black'}}>
            LIC Jeevan Umang is a comprehensive whole life insurance plan
            provided by LIC (Life Insurance Corporation of India). It offers a
            combination of protection and savings features, making it an
            attractive choice for individuals seeking long-term financial
            security.
          </Text>
          <Text
            style={{
              color: '#0e4caf',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Key Highlights of LIC Jeevan Umang:
          </Text>
          <Text style={{color: 'black'}}>
            1. Guaranteed annual payouts during the premium-paying term.
          </Text>
          <Text style={{color: 'black'}}>
            2. Coverage for the entire lifetime of the insured, providing
            lifelong financial protection.
          </Text>
          <Text style={{color: 'black'}}>
            3. Maturity benefit includes the sum assured and accrued bonuses.
          </Text>
        </View>

        {/* Image related to LIC Jeevan Umang */}
        <View>
          <Image
            source={require('../assets/Plantwo.png')}
            style={{width: '100%', height: 300}}
          />
        </View>

        {/* More content below the image */}
        <View style={{padding: 20}}>
          <Text style={{color: 'black'}}>
            In addition to its core features, LIC Jeevan Umang stands out for
            its flexibility and tax benefits. The policyholder has the
            flexibility to choose the premium-paying term and can also opt for a
            loan against the policy if needed.
          </Text>
          <Text
            style={{
              color: '#0e4caf',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Additional Points about LIC Jeevan Umang:
          </Text>
          <Text style={{color: 'black'}}>
            4. Flexible premium payment options.
          </Text>
          <Text style={{color: 'black'}}>
            5. Loan facility available for policyholders.
          </Text>
          <Text style={{color: 'black'}}>
            6. Tax benefits under Section 80C of the Income Tax Act.
          </Text>

          {/* Add more paragraphs and points as needed */}

          <Text style={{color: 'black'}}>
            7. The policyholder can enjoy tax-free maturity benefits, making it
            an efficient tax-saving instrument.
          </Text>
          <Text style={{color: 'black'}}>
            8. LIC Jeevan Umang allows for the inclusion of optional riders,
            such as critical illness rider or accidental death benefit rider,
            enhancing coverage.
          </Text>
          <Text style={{color: 'black'}}>
            9. Premiums paid towards the policy are eligible for tax deductions,
            making it a favored choice for long-term financial planning.
          </Text>
          <Text style={{color: 'black'}}>
            10. The policy provides a death benefit to the nominee in case of
            the unfortunate demise of the policyholder during the policy term.
          </Text>
          <Text
            style={{
              color: '#0e4caf',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            How to Purchase LIC Jeevan Umang:
          </Text>
          <Text style={{color: 'black'}}>
            Purchasing LIC Jeevan Umang is a straightforward process. Interested
            individuals can visit the official LIC website or contact a licensed
            LIC agent to understand the plan in detail, calculate premiums, and
            initiate the policy application.
          </Text>

          <Text style={{color: 'black'}}>
            LIC Jeevan Umang is designed to provide financial security and a
            steady income stream during the post-retirement phase. The policy
            ensures that policyholders receive a regular income even after the
            premium-paying term concludes.
          </Text>
          <Text style={{color: 'black'}}>
            The plan offers flexibility in choosing the premium-paying term,
            allowing individuals to align the policy with their financial goals
            and retirement plans.
          </Text>
          <Text style={{color: 'black'}}>
            Policyholders have the option to receive the survival benefits on a
            yearly, half-yearly, quarterly, or monthly basis, providing them
            with the freedom to manage their income as per their needs.
          </Text>
          <Text
            style={{
              color: '#0e4caf',
              fontSize: 18,
              fontWeight: 'bold',

              marginTop: 10,
            }}>
            Additional Benefits:
          </Text>
          <Text style={{color: 'black'}}>
            - The policy accrues bonuses during the premium-paying term,
            enhancing the overall maturity benefit.
          </Text>
          <Text style={{color: 'black'}}>
            - In the event of an emergency, policyholders can avail loan
            facilities against the policy to meet unforeseen financial
            requirements.
          </Text>
          <Text style={{color: 'black'}}>
            - LIC Jeevan Umang allows for the surrender of the policy under
            certain conditions, providing policyholders with financial
            flexibility.
          </Text>
          <Text style={{color: 'black'}}>
            - The policy continues to provide life coverage even after the
            premium-paying term, ensuring long-term financial protection.
          </Text>
          <Text
            style={{
              color: '#0e4caf',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Conclusion:
          </Text>
          <Text style={{color: 'black'}}>
            LIC Jeevan Umang stands as a comprehensive solution for individuals
            seeking a combination of life coverage and guaranteed income. With
            its unique features and flexibility, it caters to the evolving
            financial needs of policyholders, making it a reliable choice for
            securing the future.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Packagedetails;

const styles = StyleSheet.create({});
