<?php
/**
 * Class SampleTest
 *
 * @package The_Events_Calendar_Shortcode
 */

/**
 * Sample test case.
 */
class ShortcodeInitTest extends WP_UnitTestCase {

	/**
	 * A single example test.
	 */
	public function test_shortcode_registered() {
		$this->assertArrayHasKey('events_calendar_shortcode', $GLOBALS);
	}

	public function test_shortcode_with_no_calendar() {

        $output = do_shortcode( '[ecs-list-events]' );
        $this->assertNotEquals( '[ecs-list-events]', $output );
    }

    public function test_no_events()
    {

        $this->assertEquals( 'There are no upcoming events at this time.', do_shortcode( '[ecs-list-events]' ) );
        $this->assertEquals( 'Test no events', do_shortcode( '[ecs-list-events message="Test no events"]' ) );
    }

    public function test_outputs_future_event() {

	    $this->markTestSkipped('Do not know things');

        $postId = tribe_create_event( array(
            'post_status' => 'publish',
            'post_title' => 'My Test Event',
            'post_content' => 'Nullam nec ex consequat, volutpat justo vel, ullamcorper eros. Aliquam aliquet purus metus, in convallis libero placerat eu. Maecenas molestie blandit libero nec lacinia. Aliquam ac dui eget elit auctor luctus. Proin eget dui eleifend, fringilla metus quis, vestibulum ligula. Phasellus eget lorem ut orci pharetra aliquam. Fusce malesuada dolor ac urna pulvinar lobortis. Curabitur ac leo facilisis, imperdiet purus a, luctus enim. Curabitur iaculis dapibus nunc, in sodales diam gravida sed. Proin et orci maximus, mattis magna quis, hendrerit elit. Nunc rhoncus leo nisi, scelerisque volutpat enim ornare at.',
            'EventStartDate' => '2019-09-09',
            'EventEndDate' => '2019-09-09',
            'EventAllDay' => true,
            'EventHideFromUpcoming' => false,
            'EventShowMapLink' => true,
            'EventShowMap' => true,
            'EventCost' => '0',
        ) );

        $output = do_shortcode( '[ecs-list-events]' );
        $this->assertContains( 'My Test Event', $output );
    }
}
